import React from "react";
import { RickAndMortyListContainer } from '../pods/rick-and-morty-list/rick-and-morty-list.container';
import { AppLayout } from '../layouts';

export const RickAndMortyListScene = () => {
    return (
        <AppLayout>
            <RickAndMortyListContainer />
        </AppLayout>
    );
} 