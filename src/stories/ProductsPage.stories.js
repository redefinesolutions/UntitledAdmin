export const Default = {
  args: {}
};

export const EditMode = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const editButton = canvas.getByText('Edit Mode')
    await userEvent.click(editButton)
  }
}