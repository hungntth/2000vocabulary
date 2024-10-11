import React from "react";
import { Card, Table } from "react-bootstrap";
import { Play } from "react-feather";

export default function VocabulariesTable({ data = [] }) {
  const speakerAction = (link) => {
    const audio = new Audio(link);
    audio.play();
  };

  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Vocabulary</th>
            <th style={{ width: "40%" }}>Meaning</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.sub}</td>
              <td className="table-action">
                <Play
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
