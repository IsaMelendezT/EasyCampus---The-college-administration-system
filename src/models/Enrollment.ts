export class Enrollment {
    private enrollmentId: string;
    private studentId: string;
    private programId: string;
    private status: string;
  
    constructor(enrollmentId: string, studentId: string, programId: string) {
      this.enrollmentId = enrollmentId;
      this.studentId = studentId;
      this.programId = programId;
      this.status = "Enrolled";
    }

     // Getter and Setter for enrollmentId
    public getEnrollmentId(): string {
      return this.enrollmentId;
    }

    public setEnrollmentId(value: string): void {
      this.enrollmentId = value;
    }

    // Getter and Setter for studentId
    public getStudentId(): string {
      return this.studentId;
    }

    public setStudentId(value: string): void {
      this.studentId = value;
    }

    // Getter and Setter for programId
    public getProgramId(): string {
      return this.programId;
    }

    public setProgramId(value: string): void {
      this.programId = value;
    }

    // Getter and Setter for status
    public getStatus(): string {
      return this.status;
    }

    public setStatus(value: string): void {
      this.status = value;
    }
  
    public confirmEnrollment(): void {
      console.log(`Enrollment confirmed for student ${this.studentId} in program ${this.programId}`);
    }
  
    public waitlistStudent(courseId: string): void {
      console.log(`Student ${this.studentId} waitlisted for course ${courseId}`);
    }
  
    public dropCourse(courseId: string): void {
      console.log(`Course ${courseId} dropped by student ${this.studentId}`);
    }
  }