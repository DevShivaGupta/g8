import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Container, MantineProvider, createTheme } from "@mantine/core";
import cx from "clsx";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const theme = createTheme({
    components: {
      Container: Container.extend({
        classNames: (_, { size }) => ({
          root: cx({ [classes.responsiveContainer]: size === "responsive" }),
        }),
      }),
    },
  });

  return (
    <MantineProvider theme={theme}>
      <Container size="responsive">
        <div className={classes.contact_us}>
          <form onSubmit={form.onSubmit(() => {})}>
            <Title
              order={2}
              size="h1"
              style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
              fw={900}
              ta="center"
            >
              Get in touch
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
              <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="Your email"
                name="email"
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <TextInput
              label="Subject"
              placeholder="Subject"
              mt="md"
              name="subject"
              {...form.getInputProps("subject")}
            />
            <Textarea
              mt="md"
              label="Message"
              placeholder="Your message"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              {...form.getInputProps("message")}
            />

            <Group justify="center" mt="xl">
              <Button type="submit" size="md" color="gray">
                Send message
              </Button>
            </Group>
          </form>
        </div>
      </Container>
    </MantineProvider>
  );
};

export default ContactUs;
