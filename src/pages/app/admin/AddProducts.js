import { Button, Card, FilledInput, Input, TextField } from '@mui/material';
import { useState } from 'react';
import { saveProduct } from '../../../store/slices/productSlice';
import useAppDispatch from '../../../hooks/useAppDispatch';

export const AddProducts = () => {
  const [productDetails, setProductDetails] = useState({
    name: '',
    price: 0,
    images: [],
    description: '',
  });

  const [status, dispatch] = useAppDispatch(saveProduct);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let a = new FormData(e.target);
    dispatch(
      {
        name: a.get('item-name'),
        description: a.get('description'),
        price: a.get('price'),
      },
      (res) => {
        console.log('res', res);
      },
      (err) => {
        console.log('error', err);
      },
    );
  };

  return (
    <div className="flex flex-1">
      <form onSubmit={handleFormSubmit} className="flex flex-1">
        <div className="flex flex-1 justify-center items-center">
          <Card className=" flex w-1/2 flex-col justify-center gap-5 items-center p-4">
            <TextField name="item-name" variant="standard" label="Name" />
            <TextField name="description" variant="standard" label="Description" />
            <TextField name="price" variant="standard" inputMode="decimal" label="Price" />
            <input name="item-pictures" type="file" multiple />
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Card>
        </div>
      </form>
    </div>
  );
};
