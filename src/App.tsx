import { Map } from 'components';
import { HStack, Text, VStack } from '@chakra-ui/react';

function App() {
    return (
        <VStack height={'100%'} spacing={'0px'}>
            <HStack
                height={'3rem'}
                width={'100%'}
                paddingX={'1.5rem'}
                boxShadow={'0 2px 20px #00000040'}
            >
                <Text>Módulo para la visualización de puntos de carga</Text>
            </HStack>
            <Map />
        </VStack>
    );
}

export default App;
