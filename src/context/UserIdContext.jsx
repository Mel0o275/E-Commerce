"use client";

import React, { createContext, useContext, useState } from "react";

const UserIdContext = createContext();

export function UserIdProvider({ children }) {
    const [userId, setUserId] = useState(null);

    return (
        <UserIdContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserIdContext.Provider>
    );
}

export function useUserId() {
    const context = useContext(UserIdContext);
    if (!context) {
        throw new Error("useUserId must be used inside a UserIdProvider");
    }
    return context;
}
