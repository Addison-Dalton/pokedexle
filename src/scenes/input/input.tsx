import { ChangeEvent, FormEvent, useState } from 'react';
import styled from '@emotion/styled'
import { Heading, Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

const StyledHeader = styled(Heading)`
  margin-bottom: 1rem;
`;

const GameInput = () => {
 const [value, setValue] = useState<string>();
 const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  console.log('submitted', value);
 };

 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
 };
 return (
  <Box>
   <StyledHeader>{'Poxedexle'}</StyledHeader>
   <form onSubmit={handleSubmit}>
    <FormControl>
     <FormLabel htmlFor="search">
      {'Start typing to search for a Pokemon'}
     </FormLabel>
     <Input
      id="search"
      placeholder="Try searching for Pikachu…"
      onChange={handleChange}
     />
    </FormControl>
   </form>
  </Box>
 );
};

export default GameInput;
