import { Button, Container, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SupplierForm = ({ addUser, updateUser, submitted, data, isEdit }) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [item, setItem] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [cnumber, setContact_Number] = useState('');
    const [cnumberError, setContact_NumberError] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
            setItem('');
            setEmail('');
            setContact_Number('');
            setContact_NumberError('');
            setAddress('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0){
            setId(data.id);
            setName(data.name);
            setItem(data.item);
            setEmail(data.email);
            setContact_Number(data.cnumber);
            setAddress(data.address)
        }
    }, [data]);

    const handleContactNumberChange = (e) => {
        const value = e.target.value;
        // Check if the entered value is a valid number
        if (!isNaN(value)) {
            // Check if the length of the value is more than 10 digits
            if (value.length <= 10) {
                setContact_Number(value);
                setContact_NumberError('');
            } else {
                setContact_NumberError('Contact number cannot exceed 10 digits');
            }
        } else {
            setContact_NumberError('Please enter only numbers');
        }
    };   

    const handleNameChange = (e) => {
        const value = e.target.value;
        // Regular expression to validate if the input contains only letters
        const lettersRegex = /^[a-zA-Z\s]*$/;
        if (lettersRegex.test(value)) {
            setName(value);
            setNameError('');
        } else {
            setNameError('Please enter only letters');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        // Regular expression to validate if the input is a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) {
            setEmail(value);
            setEmailError('');
        } else {
            setEmailError('Please enter a valid email address');
        }
    };

  return (
    <Container>
      <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'black',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color:'#000000'}}>Supplier Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '170px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                 <Input 
                    type="number"
                    id='id'
                    name="id"
                    sx={{ width: '400px'}}
                    value={id}
                    onChange={e => setId(e.target.value)}
                 />   
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '170px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                 <Input 
                    type="text"
                    id='name'
                    name="name"
                    sx={{ width: '400px'}}
                    value={name}
                    onChange={handleNameChange}
                 /> 
                 {nameError && <Typography sx={{ color: 'red' }}>{nameError}</Typography>}  
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '170px',
                        display: 'block',
                    }}
                >
                    Item
                </Typography>
                 <Input 
                    type="text"
                    id='item'
                    name="item"
                    sx={{ width: '400px'}}
                    value={item}
                    onChange={e => setItem(e.target.value)}
                 />   
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '170px',
                        display: 'block',
                    }}
                >
                    Email
                </Typography>
                 <Input 
                    type="text"
                    id='email'
                    name="email"
                    sx={{ width: '400px'}}
                    value={email}
                    onChange={handleEmailChange}
                 /> 
                 {emailError && <Typography sx={{ color: 'red' }}>{emailError}</Typography>}  
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="cnumber"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '170px',
                        display: 'block',
                    }}
                >
                    Contact Number
                </Typography>
                 <Input 
                    type="text"
                    id='cnumber'
                    name="cnumber"
                    sx={{ width: '400px'}}
                    value={cnumber}
                    onChange={handleContactNumberChange}
                 /> 
                 {cnumberError && <Typography sx={{ color: 'red' }}>{cnumberError}</Typography>}  
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '170px',
                        display: 'block',
                    }}
                >
                    Address
                </Typography>
                 <Input 
                    type="text"
                    id='address'
                    name="address"
                    sx={{ width: '400px'}}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                 />   
            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
                onClick={() => isEdit ? updateUser({ id, name, item, email, cnumber, address }) : addUser({ id, name, item, email, cnumber, address})}
            >
                {
                    isEdit ? 'Update' : 'Submit'
                }
            </Button>
      </Grid>
    </Container>
  );
};

export default SupplierForm;
