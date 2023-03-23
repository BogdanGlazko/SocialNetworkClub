import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TextField } from '@mui/material';
import s from "./friend.module.sass"
import {
    getInitialValueInput,
    isFollowerSelector,
    pageSizeSelector
} from "store/reduxToolkit/features/friends-users/friendsSelectors";
import { loading } from "store/reduxToolkit/features/friends-users/friendsThunks";
import { useTypeDispatch } from "hooks/useTypeDispatch";
import useDebounce from "hooks/useDebounce";
import { changeTermOfUserOnChange } from "store/reduxToolkit/features/friends-users/friendsSlice";

interface FormValues {
    searchField: string;
}

const SearchForm: React.FC = () => {
    const pageSize = useSelector(pageSizeSelector) as number;
    const isFollower = useSelector(isFollowerSelector) as boolean;
    const initialValueInput = useSelector(getInitialValueInput) as string;
    const dispatch = useTypeDispatch();
    const [searchData, setSearchData] = useState<string>(initialValueInput);
    const debouncedValue = useDebounce<string>(searchData, 800);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const refreshSearchData = (searchData: string) => {
        dispatch(loading(1, pageSize, searchData, isFollower))
    }
    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        refreshSearchData(data.searchField);
    };

    const changeInputValueAndSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(changeTermOfUserOnChange(e.target.value))
        setSearchData(e.target.value)
    }
    useEffect(() => {
        dispatch(loading(1, pageSize, searchData, isFollower))
    }, [debouncedValue])


    return (
        <form
            className={s.formSearch}
            onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputSearchWrapper}>
                <TextField
                    value={searchData}
                    label="Type to find a person"
                    variant="outlined"
                    size="small"
                    sx={{
                        height: "50px",
                        width: {
                            md: "365px",
                            sm: "100%"
                        },
                    }}
                    {...register("searchField")}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        changeInputValueAndSearch(e)
                    }}
                />
            </div>
        </form>
    );
}

export default SearchForm;
