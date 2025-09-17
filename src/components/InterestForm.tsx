import styles from './InterestForm.module.css';
import { useForm } from '@formspree/react';
import { useState } from 'react';
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
} from "@chakra-ui/react"

interface FormState {
  name: string;
  email: string;
  department: string;
}

export const InterestForm = () => {
    const [state, handleSubmit] = useForm("xqadvzln");
    const [formData, setFormData] = useState<FormState>({ name: '', email: '', department: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
     };
    
    return (
        <div className={styles.interestFormWrapper}>
            <h2 className={styles.heading}>ご興味のある方へ</h2>
            <p>開催場所の詳細やワークショップの資料を受け取るためにSlackのグループに招待します</p>
            <p>お名前と東京科学大学のmアドレス、所属している系を選択して送信してください</p>
            {state.succeeded ? (
                <>
                    <p>ご登録いただきありがとうございます！</p>
                    <p>Slackのグループに追加されるまでお待ち下さい</p>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Fieldset.Root maxWidth={"500px"} mx="auto" my="4" className="dark">
                        <Fieldset.Content>
                            <Field.Root>
                                <Field.Label>お名前</Field.Label>
                                <Input
                                    variant="outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    maxWidth={"500px"}
                                    border="solid 1px #ccc"
                                />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>メールアドレス</Field.Label>
                                <Field.HelperText>東京科学大学のmアドレスを記入してください</Field.HelperText>
                                <Input 
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    maxWidth={"500px"}
                                    border="solid 1px #ccc"
                                />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>所属系</Field.Label>
                                <Field.HelperText>所属している系を選択してください</Field.HelperText>
                                <NativeSelect.Root
                                    maxWidth={"500px"}
                                    border="solid 1px #ccc"
                                    >
                                    <NativeSelect.Field 
                                    placeholder="所属系を選択" name="department" value={formData.department} onChange={handleChange}
                                    >
                                        <For each={["数学系", "物理学系", "化学系", "地球惑星科学系", "機械系", "システム制御系", "電気電子系", "情報通信系", "経営工学系", "材料系", "応用化学系", "数理計算科学系", "情報理工学系", "生命理工学系", "建築学系", "土木・環境工学系", "融合理工学系", "その他"]}>
                                            {(item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            )}
                                        </For>
                                    </NativeSelect.Field>
                                </NativeSelect.Root>
                            </Field.Root>
                        </Fieldset.Content>
                    </Fieldset.Root>
                    <Button colorPalette="purple" size="md" type="submit" mt="4" width="5rem" disabled={state.submitting}>
                        送信
                    </Button>
                </form>
            )}
        </div>
    )
}