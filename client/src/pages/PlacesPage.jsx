import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Perks from "../Perks";
export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedphotos, setAddedphotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extrainfo, setExtrainfo] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [maxguests, setMaxguests] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-xl mt-4">{text}</h2>;
  }
  function preInput(header) {
    return <>{inputHeader(header)}</>;
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <div>
            <Link
              className="inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full"
              to={"/account/place/new"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add new Place
            </Link>
          </div>
        </div>
      )}
      {action === "new" && (
        <div className="">
          <form>
            {preInput("Title")}
            <input
              type="text"
              title="for example: My lovely appartment"
              placeholder="title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            {preInput("Address")}
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />
            {preInput("Photos")}

            <div className="flex gap-2">
              <input
                value={photoLink}
                onChange={(ev) => setPhotoLink(ev.target.value)}
                type="text"
                placeholder={"Add using Link..."}
              />
              <button className="bg-gray-200 grow px-4 gap-2 rounded-2xl">
                Add Photo
              </button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex gap-4 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
                UPLOAD
              </button>
            </div>
            {preInput("Description")}
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            {preInput("Perks")}
            <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <Perks selected={perks} onChange={setPerks} />
            </div>
            <h2 className="text-xl mt-4">Extra Info</h2>
            <textarea
              value={extrainfo}
              onChange={(ev) => setExtrainfo(ev.target.value)}
            />
            {preInput("Check In & Check Out, Max Guests")}
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-2">Check In Time</h3>
                <input
                  type="text"
                  placeholder="14"
                  value={checkin}
                  onChange={(ev) => setCheckin(ev.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-2">Check Out Time</h3>
                <input
                  type="text"
                  placeholder="11"
                  value={checkout}
                  onChange={(ev) => setCheckout(ev.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-2">Max Guests</h3>
                <input
                  type="number"
                  
                  value={maxguests}
                  onChange={(ev) => setMaxguests(ev.target.value)}
                />
              </div>
            </div>
            <div className=" my-4">
              <button className="primary">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
