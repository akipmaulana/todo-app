import React, { Component } from "react";
import { Container, Content } from "native-base";
import { NavHeader } from "components/Navigation";
import { TaskHeaderView } from "components/View";
import { ButtonFab } from "components/Button";
import { Color } from "config";
import TaskCellContainer from "./container/TaskCellContainer";
import { ScreenName } from "app/AppConstant";

export default class TaskScreen extends Component {
  buttonAddClickHandler = () => {
    const { push } = this.props.navigation;
    push(ScreenName.TASK_FORM, { task: {} });
  };

  render() {
    const project = this.props.navigation.getParam("project", {});
    return (
      <Container style={{ backgroundColor: Color.light_grey1 }}>
        <NavHeader text={project.name} navigation={this.props.navigation} />
        <TaskHeaderView />
        <TaskCellContainer navigation={this.props.navigation} />
        <ButtonFab
          icon={"add"}
          onPress={this.buttonAddClickHandler.bind(this)}
        />
      </Container>
    );
  }
}
