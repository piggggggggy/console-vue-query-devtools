import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Layout from './components/Layout';
function App() {
    return (
        <Theme appearance="dark" accentColor="violet" panelBackground="solid">
            <Layout />
        </Theme>
    );
}

export default App;
