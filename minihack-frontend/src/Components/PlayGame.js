import React, { Component } from 'react';
import { Table, Input, Button } from 'reactstrap';
import axios from 'axios';

class PlayGame extends Component {
	render() {
		const { game } = this.props;
		console.log(game)

		return (
			<div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th></th>
                            {/* {this.renderPlayers()} */}
                        </tr>
                        {/* {this.renderSumScores()} */}
                    </thead>
                    <tbody>
                        {/* {this.renderScores()} */}
                    </tbody>
                </Table>
                <div className="text-center mb-3">
                    <Button onClick={this.addNewRow} color="danger" type="submit">
                        Add row
                    </Button>
                </div>
            </div>
		);
	}
}

export default PlayGame;