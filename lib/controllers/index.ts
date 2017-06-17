export const ctrl: any = (req: Request, res: App.Endpoint): void => {
  res.reply({
    ok: 123,
  });
};

export const ctrlWithError: any = (req: Request, res: App.Endpoint): void => {
  JSON.parse('<xml>');
};
