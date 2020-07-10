import React from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../../actions/room.action';
import './AddRoom.css';

const refInput = React.createRef();

let AddRoom = (props) => {
  let {socket, setAddRoom, createRoom} = props;

  const onAddRoom = (e) => {
    e.preventDefault();
    if (refInput.current.value.trim() !== "") {
      createRoom(refInput.current.value);
      socket.emit('add-channel');
    }
    setAddRoom(false);
  }

  const handleToggleModal = () => {
    setAddRoom(false)
  }
  return <div className="AddRoom">
    <form onSubmit={onAddRoom}>
      <h1>New Room</h1>
      <input 
        type="text"
        ref={refInput}
        placeholder="Fill the room name and enter..."
        />
      <button className="btn-close" onClick={handleToggleModal}><h2>close</h2></button>
    </form>
  </div>
}

const mapDispatchToProp = {
  createRoom: createRoom
}

AddRoom = connect(null, mapDispatchToProp)(AddRoom);

export default AddRoom;