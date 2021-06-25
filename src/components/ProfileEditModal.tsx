import React, { FormEvent } from "react";
import Modal from "../utilities/Modal";
import Loading from './Loading';
import { useAppSelector } from "../utilities/typedReduxHooks";
import "../styles/ProfileEditModal.css";
import { useState } from "react";
import { getApiUrl, getAccessToken } from "../services/config";
import { AxiosError } from "axios";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProfile } from "../actions/authActions";

const defaultProfilePic =
  "https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png";
interface Props {
  isOpen: boolean;
  onClose: () => any;
}

const ProfileEditModal: React.FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = auth.user ? auth.user : null;
  const [picture, setPicture] = useState<any>(null);

  const handleSubtmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("picture", picture);
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
    onClose();
  };

  if (auth.isLoading || !user) {
    return <Loading />;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="profile-edit">
        <form action="" onSubmit={handleSubtmit}>
          <div className="profile-edit__picture">
            <p>Current profile picture</p>
            <img
              src={
                picture
                  ? URL.createObjectURL(picture)
                  : user.profile.picture || defaultProfilePic
              }
              alt="profile-pic"
              className="tweet__author-pic"
            />
            <input
              type="file"
              name="picture"
              onChange={(e) => setPicture(e.target.files![0])}
            />
          </div>
          <div className="profile-edit__buttons">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
        <button className="btn btn-warning" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
