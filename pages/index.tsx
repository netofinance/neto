import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { Box, Container, Text, Flex, Button, VStack, StackDivider } from '@chakra-ui/react'

import ExpenseItem from '../components/ExpenseItem'

export interface Expense {
  id: string
  createdAt: string
  amount: number
  description: string
  category: string
  userId: string
}

export interface HomeProps {
  expenses: Array<Expense>
}

function Home(props: HomeProps): React.ReactElement {
  const [expenses, setExpense] = useState<Array<Expense>>([])
  
  useEffect(() => {
    setExpense(props.expenses)
  }, [])

  return (
    <Box mt="5">
      <Container>
        <Flex align="center" justify="space-between">
          <Text fontSize="3xl">Activity</Text>
          <Button colorScheme="teal">Add expenses</Button>
        </Flex>
        <Box boxShadow="xs" p="3" mt="4">
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
            {expenses.map((expense, key) => (
              <ExpenseItem
                key={key}
                description={expense.description}
                date={expense.createdAt}
                amount={expense.amount.toString()}
              />
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () =>  {
  const res = await fetch(
    `${process.env.API_URL}expenses?userId=1cf27306-f18c-4e5b-be98-42d89d1f4cf4`
  )
  const expenses = await res.json()

  return {
    props: {
      expenses,
    },
  }
}

export default Home
