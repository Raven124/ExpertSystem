function Test1()
{
  Mobile.SetCurrent("FRD-L09");
  ImageRepository.therapist.ImageButton_UnnamedCtrl.Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("connection").Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("Нет", spBottomMost).Touch();
  ImageRepository.therapist.TextView_10531077102.Touch();
  ImageRepository.therapist.TextView_10531077101.Touch();
  ImageRepository.therapist.TextView_10531077103.Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("Нет", spBottomMost).Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("Да", spBottomMost).Touch();
}

function Test2()
{
  Mobile.SetCurrent("FRD-L09");
}