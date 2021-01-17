import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

export interface ExpenseItemProps {
  description: string
  date: string
  amount: string
}

function ExpenseItem(props: ExpenseItemProps): React.ReactElement {
  return (
    <Flex align="center" justify="space-between">
      <Box>
        <Text>{props.description}</Text>
        <Text fontSize="xs" color="gray.500">
          {props.date}
        </Text>
      </Box>
      <Box>${props.amount}</Box>
    </Flex>
  )
}

export default ExpenseItem
