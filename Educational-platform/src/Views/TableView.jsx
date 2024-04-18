import React from 'react';

class TableView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        };
    }

    componentDidMount() {
        fetch('http://example.com/api/tableData')
            .then(response => response.json())
            .then(data => this.setState({ tableData: data }));
    }

    render() {
        return (
            <div>
                <h1>Table Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map(row => (
                            <tr key={row.id}>
                                <td>{row.column1}</td>
                                <td>{row.column2}</td>
                                <td>{row.column3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableView;
