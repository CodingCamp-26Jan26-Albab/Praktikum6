import React from "react";
import { Button, Card, Badge } from "react-bootstrap";

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "secondary";
    }
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case "Done":
        return (
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              backgroundColor: "#198754",
              display: "inline-block",
            }}
            title="Done"
          />
        );
      case "In Progress":
        return (
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              border: "2px solid #ffc107",
              background:
                "linear-gradient(90deg, #ffc107 50%, transparent 50%)",
              display: "inline-block",
            }}
            title="In Progress"
          />
        );
      case "To Do":
      default:
        return (
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              border: "1.5px solid #adb5bd",
              display: "inline-block",
            }}
            title="To Do"
          />
        );
    }
  };

  if (tasks.length === 0) {
    return (
      <p className="text-muted text-center mt-5">
        Belum ada tugas yang ditambahkan.
      </p>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <Card
          className="mb-3 border-0 shadow-sm rounded-4 px-3 py-3"
          key={task.id}
        >
          <Card.Body className="d-flex align-items-start justify-content-between p-0">
            <div
              style={{
                width: "320px",
                minWidth: "200px",
                paddingRight: "15px",
              }}
            >
              <small
                className="text-muted d-block mb-1"
                style={{ fontSize: "11px", marginTop: "-2px" }}
              >
                Task
              </small>
              <span
                className="fw-bold text-dark fs-6 d-block"
                style={{
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  lineHeight: "1.4",
                }}
              >
                {task.name}
              </span>
            </div>

            <div className="text-center px-2" style={{ width: "110px" }}>
              <small
                className="text-muted d-block mb-1"
                style={{ fontSize: "11px", marginTop: "-2px" }}
              >
                Priority
              </small>
              <Badge
                bg={getPriorityVariant(task.priority)}
                className="px-3 py-1 rounded-pill fw-normal"
              >
                {task.priority}
              </Badge>
            </div>

            <div className="text-center px-2 pt-3" style={{ width: "120px" }}>
              <Badge
                bg="light"
                text="dark"
                className="border px-3 py-2 rounded-pill fw-normal"
              >
                {task.status}
              </Badge>
            </div>

            <div className="text-center px-2 pt-3" style={{ width: "50px" }}>
              {renderStatusIcon(task.status)}
            </div>

            <div className="text-end pt-2" style={{ width: "80px" }}>
              <Button
                variant="link"
                className="text-dark p-1 me-1 text-decoration-none"
                onClick={() => showEditForm(task)}
                title="Edit"
              >
                ✏️
              </Button>
              <Button
                variant="link"
                className="text-danger p-1 text-decoration-none"
                onClick={() => deleteTask(task.id)}
                title="Delete"
              >
                🗑️
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
