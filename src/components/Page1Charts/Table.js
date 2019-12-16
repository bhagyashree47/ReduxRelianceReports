import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import React from 'react'

const TableChart = (props) => {
    const top5Content = (

        <Card>
            <Card.Header>
                <Card.Title as="h5">Top 5 Agents</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table responsive hover>
                    <thead>
                        <tr>

                            <th>Agent Name</th>
                            <th>Sentiment Score</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            (props.data.length < 0) ? props.data.map((table, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{table.title}</th>
                                        <td>{Math.round(table.id * 100) / 100}</td>

                                    </tr>
                                )
                            }) : <tr><td colSpan="5">Loading...</td></tr>
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>

    );
    const bottom5Content = (

        <Card>
            <Card.Header>
                <Card.Title as="h5">Bottom 5 Agents</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table responsive hover>
                    <thead>
                        <tr>

                            <th>Agent Name</th>
                            <th>Sentiment Score</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            (props.data.length < 0) ? props.data.map((table, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{table.Agent_Name}</th>
                                        <td>{Math.round(table.Sentiment_Score * 100) / 100}</td>

                                    </tr>
                                )
                            }) : <tr><td colSpan="5">Loading...</td></tr>
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>

    );


    return (
        <div>

            <Row>
                <Col md={16} xl={6}>
                    {top5Content}
                </Col>
                <Col md={16} xl={6}>
                    {bottom5Content}
                </Col>

            </Row>





        </div>
    );
}
export default TableChart;