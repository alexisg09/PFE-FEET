import { addFeelingFormType } from '@/types/types';
import Button from '../input/Button';
import FeelingForm from './FeelingForm';
import MoodForm from './MoodForm';
import SleepForm from './SleepForm';
import Link from 'next/link';

type SymptomFormProps = {
  addFeelingFormData: addFeelingFormType;
  setAddFeelingFormData: React.Dispatch<
    React.SetStateAction<addFeelingFormType>
  >;
  children: React.ReactNode;
  setShouldDoAction: React.Dispatch<React.SetStateAction<boolean>>;
};

const SymptomForm = ({
  addFeelingFormData,
  setAddFeelingFormData,
  children,
  setShouldDoAction,
}: SymptomFormProps) => {
  const handleAddSymptom = () => {
    setShouldDoAction(true);
  };

  return (
    <>
      <MoodForm
        addFeelingFormData={addFeelingFormData}
        setAddFeelingFormData={setAddFeelingFormData}
      />
      <SleepForm
        addFeelingFormData={addFeelingFormData}
        setAddFeelingFormData={setAddFeelingFormData}
      />
      <FeelingForm
        addFeelingFormData={addFeelingFormData}
        setAddFeelingFormData={setAddFeelingFormData}
      />
      <div className="flex justify-center">
        <Link href="/">
          <Button
            text="Valider"
            bgColor="bg-[#1F2937] mt-12 px-8"
            textColor="white"
          />
        </Link>
      </div>
      {children}
    </>
  );
};

export default SymptomForm;
