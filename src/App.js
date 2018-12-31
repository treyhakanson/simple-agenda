import React, { Component } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import { buildWeek } from "./utils/time";
import Agenda from "./agenda";
import Overlay from "./overlay";
import { STORAGE_KEYS, setValue, getValue } from "./utils/storage";
import { parseFile, parseData } from "./utils/parse";
import moment from "moment";

const AppWrapper = styled.div`
  padding: 2em 1rem 1rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1em;
`;

export default class App extends Component {
  state = {
    week: [],
    tasks: []
  };

  componentDidMount() {
    const week = buildWeek();
    const tasks = getValue(STORAGE_KEYS.TASKS, { fallback: [], processor: JSON.parse });
    const weekStart = getValue(STORAGE_KEYS.WEEK_START, {
      processor: (item) => moment(JSON.parse(item))
    });
    console.log(weekStart, week[0])
    if (!weekStart) {
      setValue(STORAGE_KEYS.WEEK_START, week[0], { processor: JSON.stringify });
    } else if (!weekStart.isSame(week[0])) {
      let taskLog = getValue(STORAGE_KEYS.TASK_LOG, { fallback: [], processor: JSON.parse });
      taskLog.push([...tasks]);
      setValue(STORAGE_KEYS.TASK_LOG, taskLog, { processor: JSON.stringify });
      tasks.map(day => day.map(task => (task.completed = false)));
    }
    this.setState({ week, tasks });
  }

  _onDrop = async (acceptedFiles, rejectedFiles) => {
    const [ file ] = acceptedFiles;
    const data = await parseFile(file);
    console.log(data);
    const tasks = parseData(data);
    this.setState({ tasks });
    setValue(STORAGE_KEYS.TASKS, tasks, { processor: JSON.stringify });
  }

  _onCompleted = (i, j) => {
    let { tasks } = this.state;
    tasks = [...tasks];
    tasks[i][j].completed = !tasks[i][j].completed;
    this.setState({ tasks });
    setValue(STORAGE_KEYS.TASKS, tasks, { processor: JSON.stringify });
  };

  render() {
    const { week, tasks } = this.state;

    return (
      <AppWrapper>
        <Title>Welcome back!</Title>
        <Dropzone disableClick onDrop={this._onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div {...getRootProps()}>
                <Overlay visible={isDragActive} />
                <Agenda
                  week={week}
                  tasks={tasks}
                  onCompleted={this._onCompleted}
                />
                <input {...getInputProps()} />
              </div>
            );
          }}
        </Dropzone>
      </AppWrapper>
    );
  }
}