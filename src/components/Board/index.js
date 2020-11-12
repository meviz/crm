import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import BoardInner from '../BoardInner';
import BoardActionCard from '../BoardActionCard';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    console.log(result,list);
    const [removed] = result.splice(startIndex, 1);
    
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

class Board extends React.Component {
    state = {
        lists:[
            {
                id:"items1",
                items: [
                    {
                        id:"test1",
                        head:"Acme Corporation",
                        subhead:"Cameron Williamson",
                    },
                    {
                        id:"test2",
                        head:"Acme Corporation",
                        subhead:"Cameron Williamson",
                    },
                ],
            },{
                id:"items2",
                items: [
                    {
                        id:"test3",
                        head:"Acme Corporation",
                        subhead:"Cameron Williamson",
                    }
                ]
            }
        ]
    };

    getList = id =>{
        console.log(id,this.state.lists[id]);
        return this.state.lists[id].items;
    }

    onDragEnd = result => {
        const { source, destination } = result;
        let sourceIndex, sourceItems, destinationItems, destinationIndex;
        let newList;
        console.log(result);

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            sourceIndex = source.droppableId.split("-")[1];

            sourceItems = reorder(
                this.getList(sourceIndex),
                source.index,
                destination.index
            );

            newList = this.state.lists;
            newList[sourceIndex].items = sourceItems;

            this.setState({lists:newList});
        } else {
            sourceIndex = source.droppableId.split("-")[1];
            destinationIndex = destination.droppableId.split("-")[1];

            const result = move(
                this.getList(sourceIndex),
                this.getList(destinationIndex),
                source,
                destination
            );

            console.log(result);

            newList = this.state.lists;
            newList[sourceIndex].items = result[source.droppableId];
            newList[destinationIndex].items = result[destination.droppableId];

            this.setState({lists:newList});
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (<>
            <div className="board-container">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    {this.state.lists.map((item, index) => (
                        <Droppable droppableId={item.id + "-" + index}>
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef} data-index={item.index}>
                                    <BoardInner key={item.id}>
                                    {item.items.map((item2, index) => (
                                        <Draggable
                                            key={item2.id}
                                            draggableId={item2.id}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef}
                                                     {...provided.draggableProps}
                                                     {...provided.dragHandleProps}
                                                    >
                                                    <BoardActionCard/>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    </BoardInner>
                                </div>
                            )}
                        </Droppable>
                        
                    ))}
                </DragDropContext>
            </div>
        </>
        );
    }
}


export default Board;