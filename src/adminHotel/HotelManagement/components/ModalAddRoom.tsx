import { Box, Button, Checkbox, FormControl, FormControlLabel, Modal, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import { ModalAddRoomProps, RoomType } from "../../../config/interfaces";
import { useEffect, useState } from "react";

const style = {
  borderRadius: '10px',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};

export const ModalAddRoom = (props: ModalAddRoomProps) => {

  const { open, onClose, rooms, roomToEdit, setRooms } = props

  const [baseCost, setBaseCost] = useState('')
  const [taxes, setTaxes] = useState('')
  const [descriptionRoom, setdescriptionRoom] = useState('')
  const [roomType, setRoomType] = useState<RoomType>('single')
  const [activeroom, setActiveRoom] = useState<boolean>(true)

  useEffect(() => {
    if (roomToEdit) {
      setBaseCost(roomToEdit.baseCost.toString());
      setTaxes(roomToEdit.taxes.toString());
      setdescriptionRoom(roomToEdit.description);
      setRoomType(roomToEdit.type)
      setActiveRoom(roomToEdit.active)
    }
  }, [roomToEdit])

  const addNewRoom = () => {
    if (baseCost && taxes && descriptionRoom) {
      rooms.push({
        id: Math.floor(Math.random() * (100 - 1) + 1).toString(),
        active: activeroom,
        baseCost: parseFloat(baseCost),
        description: descriptionRoom,
        taxes: parseFloat(taxes),
        type: roomType
      })
      onClose();
      setBaseCost('');
      setTaxes('');
      setdescriptionRoom('');
    } else {
      alert('Fill all fields')
    }
  }

  const updateRoom = () => {
    if (baseCost && taxes && descriptionRoom) {
      let roomAux = rooms.filter(room => room.id !== roomToEdit.id)
      roomAux.push({
        id: roomToEdit.id,
        active: activeroom,
        baseCost: parseFloat(baseCost),
        description: descriptionRoom,
        taxes: parseFloat(taxes),
        type: roomType
      })
      setRooms(roomAux);
      onClose()
    } else {
      alert('Fill all fields')
    }
  }

  const handleRoom = () => {
    if (roomToEdit) {
      updateRoom()
    } else {
      addNewRoom()
    }
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        onClose()
        setBaseCost('');
        setTaxes('');
        setdescriptionRoom('');
        setRoomType('single')
        setActiveRoom(true)
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2
          }}
        >
          <Typography
            variant="h3"

          >
            {roomToEdit ? 'Update Room' : 'Add a new Room'}
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={activeroom}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setActiveRoom(event.target.checked);
                }}
              />}
            label="Active Room"
          />
        </Box>
        <Box
          sx={{
            display: 'flex'
          }}
        >
          <TextField
            name="base-cost"
            label="Base Cost"
            type="number"
            sx={{
              mr: 2,
              mb: 2
            }}
            value={baseCost}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setBaseCost(event.target.value);
            }}

          />
          <TextField
            name="taxes"
            label="Taxes"
            type="number"
            value={taxes}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTaxes(event.target.value);
            }}
          />
        </Box>
        <TextField
          fullWidth
          name="description"
          label="Description"
          sx={{
            mb: 2
          }}
          value={descriptionRoom}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setdescriptionRoom(event.target.value);
          }}
        />
        <Typography
          variant="h4"
        >
          Room type
        </Typography>
        <FormControl
          sx={{
            width: '100%'
          }}
        >
          <RadioGroup
            name="radio-buttons-group"
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
            value={roomType}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRoomType((event.target as HTMLInputElement).value as RoomType);
            }}
          >
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="double"
              control={<Radio />}
              label="Double"
            />
            <FormControlLabel
              value="suite"
              control={<Radio />}
              label="Suite"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          onClick={handleRoom}
          fullWidth
          sx={{
            float: "right",
            mt: 2
          }}
        >
          {roomToEdit ? 'Update Room' : 'Create Room'}
        </Button>
      </Box>
    </Modal>
  )
}
