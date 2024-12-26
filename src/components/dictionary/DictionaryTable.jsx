import React from "react";
import { Card, Table } from "react-bootstrap";
import { Volume2 } from "react-feather";

export default function DictionaryTable({ data = [] }) {
    const speakerAction = (link) => {
        console.log(link);
        const audio = new Audio(link);
        audio.play();
    };

    return (
        <Card>
            <Table>
                <thead>
                    <tr>
                        <th style={{ width: "25%" }}>Words</th>
                        <th style={{ width: "25%" }}>pronunciation</th>
                        <th style={{ width: "10%" }}>type</th>
                        <th style={{ width: "35%" }}>vietnamese</th>
                        <th style={{ width: "5%" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.word}</td>
                            <td>{item.pronunciation}</td>
                            <td>{item.type}</td>
                            <td>{item.vietnamese}</td>
                            <td className="table-action">
                                <Volume2
                                    onClick={() => speakerAction(item.sound)}
                                    className="align-middle me-1"
                                    size={18}
                                    style={{ cursor: "pointer" }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}
