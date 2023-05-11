import { Box, Stack } from "@mui/material";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const phoneNumber = "xxx-xxx-xxxx"
const emailAddress = "faerycleaningservices@gmail.com"

export function Contact(){
  return <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
    <Box sx={{display:'flex', flexDirection:'column'}}>
      <Stack direction={'row'}>
        <PhoneAndroidIcon/>&nbsp;
        {phoneNumber}
      </Stack>
      <Stack direction={'row'}>
        <EmailIcon/>&nbsp;
        {emailAddress}
      </Stack>
    </Box>
  </Box>
}