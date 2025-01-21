import { useState } from "react";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const resetData = () => {
    setName("");
    setPassword("");
    setChecked(false);
  };

  const handleSubmit = (form) => {
    try {
      console.log(form);
    } catch (error) {
      console.log(error.message);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = form.entries().reduce((init, [key, value]) => {
      return { ...init, [key]: value };
    }, {});

    handleSubmit(data);
    resetData();
  };

  return (
    <div className="w-screen h-screen flex items-center bg-gradient-to-br from-green-400 to-green-800">
      <div className="w-[450px] h-auto p-10 mx-auto bg-white rounded flex flex-col items-center justify-center gap-14">
        <h1 className="text-green-600 font-extrabold text-4xl">Login</h1>
        <form
          className="flex flex-col items-center gap-3 w-full"
          onSubmit={formSubmit}
        >
          <Input
            placeholder="Name"
            className="bg-black/10"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
          <div className="flex flex-col gap-1 w-full *:w-full">
            <Input
              placeholder="Password"
              className="bg-black/10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              required
            />
            <div className="flex items-center gap-2">
              <Input
                type="checkbox"
                className="h-5 w-4 text-green-500 accent-current"
                id="check"
                name="check"
                checked={checked}
                onChange={() => setChecked((prev) => !prev)}
              />
              <label
                htmlFor="check"
                className="text-gray-600 text-sm font-medium cursor-pointer selection:bg-transparent"
              >
                Don't forget me
              </label>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-green-800 hover:bg-green-900 text-white mt-5 w-full"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
