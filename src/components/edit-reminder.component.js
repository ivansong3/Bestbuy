import React, { Component } from 'react';
import axios from 'axios';

export default class EditReminder extends Component {
    constructor(props) {
        super(props);

        this.onChangeReminderDescription = this.onChangeReminderDescription.bind(this);
        this.onChangeReminderNotes = this.onChangeReminderNotes.bind(this);
        this.onChangeReminderPriority = this.onChangeReminderPriority.bind(this);
        this.onChangeReminderCompleted = this.onChangeReminderCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            reminder_description: '',
            reminder_notes: '',
            reminder_priority: '',
            reminder_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/reminders/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    reminder_description: response.data.reminder_description,
                    reminder_notes: response.data.reminder_notes,
                    reminder_priority: response.data.reminder_priority,
                    reminder_completed: response.data.reminder_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeReminderDescription(e) {
        this.setState({
            reminder_description: e.target.value
        });
    }

    onChangeReminderNotes(e) {
        this.setState({
            reminder_notes: e.target.value
        });
    }

    onChangeReminderPriority(e) {
        this.setState({
            reminder_priority: e.target.value
        });
    }

    onChangeReminderCompleted(e) {
        this.setState({
            reminder_completed: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedReminder = {
            reminder_description: this.state.reminder_description,
            reminder_notes: this.state.reminder_notes,
            reminder_priority: this.state.reminder_priority,
            reminder_completed: this.state.reminder_completed
        };
        console.log(updatedReminder);
        axios.post('http://localhost:4000/reminders/update/'+this.props.match.params.id, updatedReminder)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Update Reminder</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.reminder_description}
                               onChange={this.onChangeReminderDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.reminder_notes}
                               onChange={this.onChangeReminderNotes}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.reminder_priority==='Low'}
                                   onChange={this.onChangeReminderPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.reminder_priority==='Medium'}
                                   onChange={this.onChangeReminderPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.reminder_priority==='High'}
                                   onChange={this.onChangeReminderPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                               id="completedCheckbox"
                               type="checkbox"
                               onChange={this.onChangeReminderCompleted}
                               checked={this.state.reminder_completed}
                               value={this.state.reminder_completed}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Create New Reminder" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}