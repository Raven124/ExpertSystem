function Test2()
{
  Mobile.SetCurrent("FRD-L09");
  OCR.Recognize(Mobile.Device()).BlockByText("connection").Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("Нет").Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("Нет )").Touch();
  ImageRepository.therapist.TextView_10531077101.Touch();
  OCR.Recognize(Mobile.Device()).BlockByText("Да", spBottomMost).Touch();
}