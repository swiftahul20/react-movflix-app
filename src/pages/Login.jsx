import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/image/logo_full.png";
import { useForm } from "react-hook-form";
// import axios from "axios";
import axios from "../components/lib/axios-instance/GETOptions";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import AuthContext from "../utils/context/AuthProvider";

const Login = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { auth, setAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("");
      if (response.data.success) {
        console.log(response);
        console.log("Authentication successful");
      } else {
        setError("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  const handleClick = async () => {
    try {
      const response = await axios.post(
        // "https://api.themoviedb.org/3/authentication/guest_session/new",
        "https://api.themoviedb.org/4/auth/request_token",
        // "https://api.themoviedb.org/4/auth/access_token",
        options,
      );
      if (response.data.success) {
        const resToken = response.data.request_token;
        window.location = `https://www.themoviedb.org/auth/access?request_token=${resToken}`;
        // sessionStorage.setItem("token", response.data.guest_session_id);
        console.log("access token", response);
      } else {
        setError("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGM0YjU3ZjJiYWRmZjM4MTg4ODY5OTAwOWQzOWZjNCIsInN1YiI6IjY1OGU4NzAwY2EwZTE3MjRkOWJhNmY2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V00xbTujUrGLeAgrLC1ExhFAKqf2rouRu1JrNqnaJGc",
    },
    body: JSON.stringify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDg4NzUzNTIsInZlcnNpb24iOjEsInNjb3BlcyI6WyJwZW5kaW5nX3JlcXVlc3RfdG9rZW4iXSwicmVkaXJlY3RfdG8iOm51bGwsIm5iZiI6MTcwODg3NDQ1MiwiYXVkIjoiZWRjNGI1N2YyYmFkZmYzODE4ODg2OTkwMDlkMzlmYzQiLCJqdGkiOjY3NDMwNjV9.7N0eCYW_8Izzw2Br7mlekTHJrfeJ5ba5SMieUXm2sc0",
    ),
  };

  const data = [
    {
      label: "Login",
      value: "login",
      desc: (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                placeholder="Email address"
                {...register("username", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
                placeholder="Password"
                {...register("password")}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#E50914] px-4 py-2 text-sm font-medium text-white hover:bg-[#e50914c2] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      ),
    },
    {
      label: "Login as a Guest",
      value: "guest",
      desc: (
        <button
          onClick={handleClick}
          className="group relative mt-6 flex w-full justify-center rounded-md border border-transparent bg-[#E50914] px-4 py-2 text-sm font-medium text-white hover:bg-[#e50914c2] focus:ring-offset-2"
        >
          Guest Sign In
        </button>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center bg-[#141414] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-md max-w-md space-y-8">
        <div className="mb-10 flex justify-center">
          <img className="w-60 drop-shadow-md" src={Logo}></img>{" "}
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-medium text-white">
            Sign in to your account
          </h2>
        </div>
        <Tabs id="custom-animation" value={activeTab}>
          <TabsHeader
            className="rounded-none border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-300 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "font-bold tracking-wide text-gray-200"
                    : "tracking-wide text-gray-500 hover:text-white"
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
