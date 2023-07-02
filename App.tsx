import * as React from 'react';
// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {

	return (
		<GradientProvider>
			{children}
		</GradientProvider>
	)
}

const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				<Navigation />
			</AppState>
		</NavigationContainer>
	);
};

export default App;
