import React, { FormEvent } from "react";
import Modal from "../utilities/Modal";
import Loading from "./Loading";
import { useAppSelector } from "../utilities/typedReduxHooks";
import "../styles/ProfileEditModal.css";
import { useState } from "react";
import { getApiUrl, getAccessToken } from "../services/config";
import { AxiosError } from "axios";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProfile } from "../actions/authActions";

interface Props {
  isOpen: boolean;
  onClose: () => any;
}

const ProfileEditModal: React.FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = auth.user && auth.user;
  const [bio, setBio] = useState(user ? user.profile.bio : "");
  const [picture, setPicture] = useState<any>(null);
  const [header, setHeader] = useState<any>(null);

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    if (picture !== null) {
      form.append("picture", picture);
    }
    if (header !== null) {
      form.append("header", header);
    }
    form.append("bio", bio);
    axios
      .patch(getApiUrl("users/profile/"), form, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `token ${getAccessToken()}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        onClose();
        dispatch(getProfile());
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);
      });
  };
  const handleCancel = () => {
    setPicture(null);
    setHeader(null);
    setBio("");
    onClose();
  };

  if (!auth.isAuthenticated) {
    return <></>;
  }

  if (auth.isLoading || !user) {
    return <Loading />;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="profile-edit">
        <div className="profile-edit__container">
          <div className="profile-edit__picture">
            <img
              src={
                picture ? URL.createObjectURL(picture) : user.profile.picture
              }
              alt="profile-pic"
              className="profile-edit__author-pic"
            />
            <span className="profile-edit__span">Current profile picture</span>
            <div>
              <label
                htmlFor="profile-edit__select-picture"
                className="profile-edit__select-label"
              >
                Select image
              </label>
              <input
                type="file"
                id="profile-edit__select-picture"
                name="picture"
                onChange={(e) => setPicture(e.target.files![0])}
              />
            </div>
          </div>
          <div className="profile-edit__header">
            <img
              src={header ? URL.createObjectURL(header) : user.profile.header}
              alt="profile-pic"
              className="profile-edit__author-pic"
            />
            <span className="profile-edit__span">Current profile header</span>
            <div>
              <label
                htmlFor="profile-edit__select-header"
                className="profile-edit__select-label"
              >
                Select image
              </label>
              <input
                type="file"
                id="profile-edit__select-header"
                name="header"
                onChange={(e) => setHeader(e.target.files![0])}
              />
            </div>
          </div>
          <div className="profile-edit__bio">
            <span className="profile-edit__span">Describe yourself</span>
            <input
              className="form-control"
              type="text"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
        <div className="profile-edit__buttons">
          <button className="button-modal" onClick={handleClick}>
            Update
          </button>
          <button className="button-modal" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
