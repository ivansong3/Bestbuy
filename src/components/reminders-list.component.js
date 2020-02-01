import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Reminder = props => (
    <tr>
        <td className={props.reminder.reminder_completed ? 'completed' : ''}>{props.reminder.reminder_description}</td>
        <td className={props.reminder.reminder_completed ? 'completed' : ''}>{props.reminder.reminder_responsible}</td>
        <td className={props.reminder.reminder_completed ? 'completed' : ''}>{props.reminder.reminder_priority}</td>
        <td>{props.reminder.reminder_completed}</td>
        <td>
            <Link to={"/edit/"+props.reminder._id}>Edit</Link>
        </td>
    </tr>
)

export default class RemindersList extends Component {
    constructor(props) {
        super(props);
        this.state = {reminders: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/reminders/')
            .then(res => {
                this.setState({reminders: res.data});
            })
            .catch(err => {
                // implement error state
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <h3>Reminders:</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Notes</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.remindersList() }
                    </tbody>
                </table>
            </div>
        )
    }

    remindersList() {
        return this.state.reminders.map((curr, i) => {
            return <Reminder reminder={curr} key={i} />;
        })
    }
}