import React from "react";
import "./UserSubscription.css";
export const UserSubscription = ({ user }) => {
  const userSubscriptions = user.subscriptions;
  return (
    <div className="user-subscription-detail">
      <div className="header">
        <span>User Subscription</span>
        <div className="pending-amount">Pending Amount <span>{user.pendingAmount}</span></div>
      </div>
      <table className="subscription-list">
        <thead>
          <tr>
            <th>Due Period</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userSubscriptions.map((userSubscription) => (
            <tr key={userSubscription.subscriptionId}>
              <td>
                <span>{userSubscription.dueMonth}</span>
              </td>
              <td className="amount">{userSubscription.amount}</td>
              <td
                className={`subscription-detail ${
                  userSubscription.isPaid ? "paid" : "pending"
                }`}
              >
                {userSubscription.isPaid ? "Paid" : "Pending"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
