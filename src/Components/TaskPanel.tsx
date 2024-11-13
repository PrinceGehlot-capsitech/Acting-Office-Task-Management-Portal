import React from 'react';
import { Panel } from '@fluentui/react/lib/Panel';

interface TaskPanelProp {
    open: boolean;
    onCancel: () => void;
}

const TaskPanel: React.FC<TaskPanelProp> = ({ open, onCancel}) => {

    return (

        <Panel
        headerText="Sample panel"
        isOpen={open}
        onDismiss={onCancel}
        closeButtonAriaLabel="Close"
      >
        <p>Content goes here.</p>
      </Panel>
    );
};

export default TaskPanel;
