import { useState } from "react";
import { TextInput, Label, Button, Checkbox, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spin, setSpin] = useState(false)
  const navigate = useNavigate()

  const formData = new FormData()

  formData.append('username', username)
  formData.append('password', password)

  const login = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/token", {
      method: "POST",
      body: formData
    });
    if (!response.status === 200) {
      throw new Error("error", response.status);
    } 
    else{
      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      navigate('/home')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpin(true)
    login()
  };
  return (
    
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your username" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@gmail.com"
            required
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">{spin ?"" : 'Submit'}  <Spinner className={spin ? '': 'hidden'} id="spiner"  aria-label="Default status example"/></Button>
      </form>
   
    
  );
};

export default LoginForm;
