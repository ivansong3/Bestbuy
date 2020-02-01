import React, { Component } from 'react';
import axios from 'axios';

export default class CreateReminder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reminder_description: '',
            reminder_notes: '',
            reminder_priority: '',
            reminder_completed: false
        }

        // Binding the function calls to this class object
        this.onChangeReminderDescription = this.onChangeReminderDescription.bind(this);
        this.onChangeReminderNotes = this.onChangeReminderNotes.bind(this);
        this.onChangeReminderPriority = this.onChangeReminderPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        // preventDefault() ensures that the default html form submission behaviour is prevented
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Reminder Description: ${this.state.reminder_description}`);
        console.log(`Reminder Notes: ${this.state.reminder_notes}`);
        console.log(`Reinder Priority: ${this.state.reminder_priority}`);

        const newReminder = {
            reminder_description: this.state.reminder_description,
            reminder_notes: this.state.reminder_notes,
            reminder_priority: this.state.reminder_priority,
            reminder_completed: this.state.reminder_completed
        }
    
        axios.post('http://localhost:4000/reminders/add', newReminder)
            .catch(err => {
                console.log('add a error dialog page soon!')
            });

        this.setState({
            reminder_description: '',
            reminder_notes: '',
            reminder_priority: '',
            reminder_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create a new Reminder</h3>
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

                    <div className="form-group">
                        <input type="submit" value="Create New Reminder" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}