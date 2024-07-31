import React, { useEffect, useState } from "react";
import { UserDetail } from "../components/UserDetail/UserDetail.jsx";
import { useParams } from "react-router-dom";
import { getUser } from "../services/userApi.js";
import { UserSubscription } from "../components/UserSubscription/UserSubscription.jsx";

export const UserDetailPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const data = await getUser(id);
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-detail-display">
      <UserDetail user={user} />
      <UserSubscription user={user} />
    </div>
  );
};
