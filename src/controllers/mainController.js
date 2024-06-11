export async function returnFileName(req, res) {
  res.status(201).json({ message: `Uploaded`, fileName: req.file?.filename });
}

export async function returnFileNames(req, res) {
  res.status(201).json({
    message: `Uploaded`,
    fileNames: req.files?.map((f) => f.filename),
  });
}
