"use client";
import { useUserAuth } from "./_utils/auth-context";
import React, { useState } from "react";
import Link from "next/link";


export default function page(){
  const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();


  const renderAuthButton = () => {
    if (useUserAuth().user == null) {
      return <button onClick={signIn}>Sign in with GitHub</button>;
    } else {
      return ( 
        <div className = "flex flex-col items-center p-4 bg-green-600">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={signOut}>Sign out</button>
          <Link href="week-9/shopping-list">Continue to Shopping List</Link>
        </div>
        
      );
    }
  }
  const signIn = async () => {
    await gitHubSignIn();
  };

  const signOut = async () => {
    await firebaseSignOut();
  };

  return(
    <main className="bg-green-700 flex justify-center items-center min-h-screen">
      <div className = "flex flex-col items-center" >
        <h2 className="text-3xl font-bold m-2 border-">Shopping List App</h2>
        {renderAuthButton()}
      </div>
    </main>
  );
    
}