import { useState } from "react";


function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    phone: null,
    cricket: false,
    chess: false,
    ludo: false,
    maritial_Status: "",
    country_name: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.type === "checkBox" ? event.target.checked : event.target.value,
    }));
  }

  const [showpass, set_showpass] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <form onSubmit={submitHandler} action="/submit" method="GET" className="space-y-6">
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold">Personal Info</legend>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="relative">
                <input
                  type={showpass ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={changeHandler}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  onClick={() => set_showpass(!showpass)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm cursor-pointer text-blue-500"
                >
                  {showpass ? "Hide" : "View"}
                </span>
              </div>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold">Hobbies</legend>
            <div className="space-y-2">
            <div className="flex items-center">
  <input
    type="checkBox"
    id="cricket"
    name="cricket"
    checked={formData.cricket}
    onChange={changeHandler}
    className="mr-2"
  />
  <label htmlFor="cricket">cricket</label>
</div>
<div className="flex items-center">
  <input
    type="checkBox"
    id="chess"
    name="chess"
    checked={formData.chess}
    onChange={changeHandler}
    className="mr-2"
  />
  <label htmlFor="chess">chess</label>
</div>
<div className="flex items-center">
  <input
    type="checkBox"
    id="ludo"
    name="ludo"
    checked={formData.ludo}
    onChange={changeHandler}
    className="mr-2"
  />
  <label htmlFor="ludo">ludo</label>
</div>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold">Marital Status</legend>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="married"
                  name="maritial_Status"
                  value="MARRIED"
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="married">Married</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="unmarried"
                  name="maritial_Status"
                  value="NOT MARRIED"
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="unmarried">Unmarried</label>
              </div>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold">Country</legend>
            <select
              required
              name="country_name"
              value={formData.country_name}
              id="country_name"
              onChange={changeHandler}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="not selected">Select</option>
              <option value="india">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="usa">U.S.A</option>
              <option value="dubai">UAE</option>
            </select>
          </fieldset>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
