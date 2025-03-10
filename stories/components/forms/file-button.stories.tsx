import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import {
  Button,
  FileButton,
  FormControl,
  HStack,
  IconButton,
  Link,
  Text,
  Wrap,
  VStack,
} from "@yamada-ui/react"
import { useRef, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Story = StoryFn<typeof FileButton>

const meta: Meta<typeof FileButton> = {
  title: "Components / Forms / FileButton",
  component: FileButton,
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} />

      <FileButton>
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const withMultiple: Story = () => {
  return (
    <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} multiple />

      <FileButton multiple>
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const withAccept: Story = () => {
  return (
    <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<Icon icon={faPlus} />}
        accept="image/png,image/jpeg"
      />

      <FileButton accept="image/png,image/jpeg">
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md">
      <FileButton colorScheme="primary" size="xs">
        X Small
      </FileButton>

      <FileButton colorScheme="secondary" size="sm">
        Small
      </FileButton>

      <FileButton colorScheme="warning" size="md">
        Medium
      </FileButton>

      <FileButton colorScheme="danger" size="lg">
        Large
      </FileButton>
    </Wrap>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      <FileButton colorScheme="primary">Primary</FileButton>

      <FileButton colorScheme="secondary">Secondary</FileButton>

      <FileButton colorScheme="warning">Warning</FileButton>

      <FileButton colorScheme="danger">Danger</FileButton>

      <FileButton colorScheme="link">Link</FileButton>

      <FileButton colorScheme="gray">Gray</FileButton>

      <FileButton colorScheme="zinc">Zinc</FileButton>

      <FileButton colorScheme="neutral">Neutral</FileButton>

      <FileButton colorScheme="stone">Stone</FileButton>

      <FileButton colorScheme="red">Red</FileButton>

      <FileButton colorScheme="rose">Rose</FileButton>

      <FileButton colorScheme="pink">Pink</FileButton>

      <FileButton colorScheme="orange">Orange</FileButton>

      <FileButton colorScheme="amber">Amber</FileButton>

      <FileButton colorScheme="yellow">Yellow</FileButton>

      <FileButton colorScheme="lime">Lime</FileButton>

      <FileButton colorScheme="green">Green</FileButton>

      <FileButton colorScheme="emerald">Emerald</FileButton>

      <FileButton colorScheme="teal">Teal</FileButton>

      <FileButton colorScheme="cyan">Cyan</FileButton>

      <FileButton colorScheme="sky">Sky</FileButton>

      <FileButton colorScheme="blue">Blue</FileButton>

      <FileButton colorScheme="indigo">Indigo</FileButton>

      <FileButton colorScheme="violet">Violet</FileButton>

      <FileButton colorScheme="purple">Purple</FileButton>

      <FileButton colorScheme="fuchsia">Fuchsia</FileButton>
    </Wrap>
  )
}

export const withVariant: Story = () => {
  return (
    <Wrap gap="md">
      <FileButton colorScheme="primary" variant="solid">
        Solid
      </FileButton>

      <FileButton colorScheme="secondary" variant="outline">
        Outline
      </FileButton>

      <FileButton colorScheme="warning" variant="ghost">
        Ghost
      </FileButton>

      <FileButton colorScheme="danger" variant="link">
        Link
      </FileButton>

      <FileButton variant="unstyled">Unstyle</FileButton>
    </Wrap>
  )
}

export const withBorderColor: Story = () => {
  return (
    <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isDisabled />

      <FileButton isDisabled>
        {({ onClick, isDisabled }) => (
          <Link
            onClick={onClick}
            opacity={isDisabled ? 0.4 : 1}
            cursor={isDisabled ? "not-allowed" : "pointer"}
            _hover={isDisabled ? undefined : { textDecoration: "underline" }}
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl
        isDisabled
        label="Upload file"
        helperMessage="Please select a file to upload."
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isReadOnly />

      <FileButton isReadOnly>
        {({ onClick, isReadOnly }) => (
          <Link
            onClick={onClick}
            cursor={isReadOnly ? "default" : "pointer"}
            _hover={isReadOnly ? undefined : { textDecoration: "underline" }}
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl
        isReadOnly
        label="Upload file"
        helperMessage="Please select a file to upload."
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isInvalid />

      <FormControl
        isInvalid
        label="Upload file"
        errorMessage="File is required."
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const useReset: Story = () => {
  const [files, onChange] = useState<File[] | null>(null)
  const resetRef = useRef<() => void>(null)

  const onReset = () => {
    onChange(null)
    resetRef.current?.()
  }

  return (
    <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>
  )
}

export const reactHookForm: Story = () => {
  type Data = { fileButton: File[] | null }

  const resetRef = useRef<() => void>(null)
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Data>()

  const onReset = () => {
    setValue("fileButton", null)
    resetRef.current?.()
  }
  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.fileButton}
        label="Files"
        errorMessage={errors.fileButton?.message}
      >
        <Controller
          name="fileButton"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field: { ref, name, onChange, onBlur } }) => (
            <HStack>
              <FileButton
                {...{ ref, name, onChange, onBlur }}
                resetRef={resetRef}
              >
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
