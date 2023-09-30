import { Card,Button,TextField, Typography } from "@mui/material";

const Landing = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-6 flex justify-center  mt-24'>
                <Card className="h-96 w-80 border-black flex items-center flex-col py-6 px-3">
                    <Typography variant="h5" className="font-semibold mb-5" >Spread Some Joy</Typography>
                    <TextField variant="outlined" label="Username" color='secondary'  className="my-4"></TextField>
                    <TextField variant="outlined" label="Password" type="password" className="my-4"></TextField>
                    <Button variant="contained" className="bg-green-600 hover:bg-green-500">Login</Button>
                </Card>
            </div>
            <div className='col-span-6 flex justify-center mt-20'><img src="./../../src/assets/food_donation_2.jpg"  width={'500px'}  /></div>
            
        </div>
    );
};

export default Landing;