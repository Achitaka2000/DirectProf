'use client';

import Avatar from "@/app/components/Avatar";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import HeartButton from "@/app/components/HeartButton";
import { SafeUser } from "@/app/types";

import React from "react"; 
import Image from "next/image";


interface CoursePresentationProps {
    currentUser?: SafeUser | null;
    courseId: string;
    courseName: string;
    courseDescription?: string;
    courseImage?: string;
    subjectName: string;
    teacherName: string;
    teacherImage?: string;
}

const CoursePresentation: React.FC<CoursePresentationProps> = ({
    currentUser,
    courseId,
    courseName,
    courseDescription,
    courseImage='/images/course.jpeg',
    subjectName,
    teacherName,
    teacherImage='/images/placeholder.jpg',
}) => {
    return (
        <Container>
        <div className="
        flex
        flex-col
        justify-center
        items-center
        h-full
        gap-4
        pt-16
        ">
            <div className="flex items-center justify-center">
                <Heading title={courseName} subtitle={subjectName} center />
            </div>
            <div className="absolute top-40 right-40">
                <HeartButton courseId={courseId} currentUser={currentUser} />
            </div>
            <hr className="w-2/3 border-[1px]"/>
            <div className="flex flex-row items-center gap-3">
                Course made by {teacherName} 
                <Avatar src={teacherImage} />
            </div>
            <Image className="rounded-xl" src={courseImage || "/images/course.jpeg"} alt={courseName} width={400} height={400}/>
            <div className="text-xl text-justify w-2/3">
            {courseDescription && typeof courseDescription === 'string' && (courseDescription.split('\\n').map((line, index) => (
                <React.Fragment key={index}>
                {line}
                {index <courseDescription!.split('\\n').length - 1 && <br />}
                </React.Fragment>)
            ))}            
            </div>
            <Button
            label="Enroll"
            onClick={() => console.log('Enroll')}
            notLarge
            />
        </div>
        </Container>
    );
};

export default CoursePresentation;