import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
  error?: FieldError;
};

const SignInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  function handlerSubmit<SignInFormData>(data: SignInFormData) {
    console.log(data);
  }
  return (
    <Flex w="100%" h="90vh" align="center" justify="center">
      <Flex
        as="form"
        w="100vw"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handlerSubmit}
      >
        <Stack spacing={4}>
          <Input
            error={errors.email}
            type="email"
            label="E-mail"
            {...register("email")}
          />

          <Input
            type="password"
            error={errors.password}
            label="Senha"
            {...register("password")}
          />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
