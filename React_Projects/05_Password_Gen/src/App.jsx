import { useCallback, useEffect, useState } from "react";
import { FaRegEye, FaEyeSlash, FaCopy } from "react-icons/fa";
import "./App.css";

function App() {
  const [showPass, setPass] = useState(false);
  const [password, setPassword] = useState("123");
  const [length, setLength] = useState(8);
  const [num_Allowed, set_Num_Allowed] = useState(false);
  const [char_Allowed, set_Char_Allowed] = useState(false);

  const Pass_Gen = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (num_Allowed) {
      str += "1234567890";
    }
    if (char_Allowed) {
      str += "!@#$%^&*()_+~";
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, num_Allowed, char_Allowed]);

  useEffect(() => {
    Pass_Gen();
  }, [length, num_Allowed, char_Allowed]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => alert("Password copied to clipboard!"))
      .catch((err) => alert("Failed to copy password: " + err));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white border rounded-lg p-4">
        <h1 className="text-xl font-bold text-center mb-4">Password Generator</h1>

        <div className="flex items-center border rounded-lg p-2 mb-4">
          <input
            type={showPass ? "text" : "password"}
            value={password}
            readOnly
            className="flex-1 text-gray-700 bg-transparent outline-none px-2"
          />
          <button
            onClick={() => setPass(!showPass)}
            className="text-gray-600 px-2"
          >
            {showPass ? <FaRegEye size={20} /> : <FaEyeSlash size={20} />}
          </button>
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
        >
          Copy Password
        </button>

        <div className="mb-4">
          <label htmlFor="length" className="block text-gray-700 font-medium">
            Password Length: {length}
          </label>
          <input
            id="length"
            type="range"
            min={3}
            max={15}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={num_Allowed}
            onChange={() => set_Num_Allowed(!num_Allowed)}
            className="mr-2"
          />
          <label className="text-gray-700">Include Numbers</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={char_Allowed}
            onChange={() => set_Char_Allowed(!char_Allowed)}
            className="mr-2"
          />
          <label className="text-gray-700">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
