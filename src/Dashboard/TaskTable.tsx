import * as React from "react";
import { Announced } from "@fluentui/react/lib/Announced";
import { TextField, ITextFieldStyles } from "@fluentui/react/lib/TextField";
import {
  DetailsList,
  Selection,
  IColumn,
  SelectionMode,
} from "@fluentui/react/lib/DetailsList";
import { MarqueeSelection } from "@fluentui/react/lib/MarqueeSelection";
import { mergeStyles } from "@fluentui/react/lib/Styling";

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
});

const textFieldStyles: Partial<ITextFieldStyles> = {
  root: { maxWidth: "300px" },
};

export interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

export class TaskTable extends React.Component<
  {},
  IDetailsListBasicExampleState
> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    this._selection = new Selection({
      onSelectionChanged: () =>
        this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    // Populate with items for demos.
    this._allItems = [];
    for (let i = 0; i < 200; i++) {
      this._allItems.push({
        key: i,
        name: "Item " + i,
        value: i,
      });
    }

    this._columns = [
      {
        key: "column1",
        name: "Name",
        fieldName: "name",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
      {
        key: "column2",
        name: "Value",
        fieldName: "value",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
    ];

    this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
    };
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
      <div>
        <TextField
          className={exampleChildClass}
          label="Filter by name:"
          // onChange={this._onFilter}
          styles={textFieldStyles}
        />
        <Announced
          message={`Number of items after filter applied: ${items.length}.`}
        />
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            selectionMode={SelectionMode.none}
            items={items}
            columns={this._columns}
            setKey="set"
          />
        </MarqueeSelection>
      </div>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return (
          "1 item selected: " +
          (this._selection.getSelection()[0] as IDetailsListBasicExampleItem)
            .name
        );
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onFilter = (
    _ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text: string
  ): void => {
    this.setState({
      items: text
        ? this._allItems.filter((i) => i.name.toLowerCase().indexOf(text) > -1)
        : this._allItems,
    });
  };
}
