//create array of studentSubmissions (sample student data)
//write a for loop per function
//may contain if statement or comparison logic
//remember to return function

const sampleStudentData = [

    student1 = {
        quizName: "Algebra",
        quizModule: "Module A",
        quizScore: 86,
        studentId: 4832,
        studentName: "Wanda",
        submissionDate: "11/8/2021"
    },
    
    student2 = {
        quizName: "Algebra",
        quizModule: "Module A",
        quizScore: 100,
        studentId: 9823,
        studentName: "Vision",
        submissionDate: "11/8/2021"
    },
    
    student3 = {
        quizName: "History",
        quizModule: "Module B",
        quizScore: 85,
        studentId: 7582,
        studentName: "Agatha",
        submissionDate: "11/8/2021"
    },
    
    student4 = {
        quizName: "History",
        quizModule: "Module B",
        quizScore: 98,
        studentId: 8765,
        studentName: "Darcy",
        submissionDate: "11/8/2021"
    },
    
    student5 = {
        quizName: "Statistics",
        quizModule: "Module A",
        quizScore: 82,
        studentId: 4321,
        studentName: "Monica",
        submissionDate: "11/8/2021"
    },
    
    student6 = {
        quizName: "Statistics",
        quizModule: "Module A",
        quizScore: 80,
        studentId: 9742,
        studentName: "Jimmy",
        submissionDate: "11/8/2021"
    },
    
    student7 = {
        quizName: "Algebra",
        quizModule: "Module A",
        quizScore: 88,
        studentId: 8745,
        studentName: "Dottie",
        submissionDate: "11/8/2021"
    },
    
    student8 = {
        quizName: "History",
        quizModule: "Module A",
        quizScore: 100,
        studentId: 9870,
        studentName: "Herb",
        submissionDate: "11/8/2021"
    },
    
    // student9 and student10 will exist outside the array
    
    student9 = {
        quizName: "End of Time?",
        quizModule: "Alioth?",
        quizScore: 0,
        studentId: 0,
        studentName: "He Who Remains",
        submissionDate: "0/0/0000"
    },
    
    student10 = {
        quizName: "Jump Scare",
        quizModule: "Final Episode",
        quizScore: 0,
        studentId: 0,
        studentName: "Miss Minutes",
        submissionDate: "0/0/0000"
    }
    ];
    
    const filterByDate = (date, submissions) => {
        const studentSubmissions = [];
        for (const submission of submissions){
            if (date === submission.submissionDate){
                studentSubmissions.push(submission);
            }
        }
        
        return studentSubmissions;
    };
    
    
    
    const filterByStudentId = () => {
    
        return filterByStudentId;
    
    };
    
    
    
    const findUnsubmitted = () => {
    
        return findUnsubmitted;
    
    };
    
    
    
    const getAverageScore = () => {
    
        return getAverageScore;
    
    };
    