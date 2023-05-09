import { AppBar, Toolbar, Button } from "@mui/material";

type callback = () => void
export interface AppbarProps{
  onHome:callback,
  onPricing:callback,
  onApplication:callback,
}

export function Appbar(props : AppbarProps) {
  return <AppBar >
    <Toolbar>
      <Button onClick={() => props.onHome()}        >Home</Button>
      <Button onClick={() => props.onPricing()}     >Base Pricing</Button>
      <Button onClick={() => props.onApplication()} >Application</Button>
    </Toolbar>
  </AppBar>
}